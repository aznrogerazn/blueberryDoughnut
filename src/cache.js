// cache.js (Caching Module, ES6 Version)
// VER 0.1.1
// Conceived 17 Jul., 2017

/*  LIBRARIES SECTION:
 *  All required libraries will be imported for use here.
 *  Whether the libraries are external, included by tag, or compiled
 *  with the package, they should be at least exposed here.
 */

'use strict';
import Backendless from 'backendless';

function CacheMachine (tableName, isUserRelated) {

    // Private Namespace
    let _tableName = tableName;
    let _LStableName = tableName.toUpperCase();
    let _isUserRelated = isUserRelated;
    let _tableData = [];
    let _lastUpdated = '';
    let _cacheReady = false;

    // Helper Functions
    let Log = (msg) => {
        // Quiet configuration
        // console.log('[CacheMachine:' + _tableName + '] ' + msg);
    };
    let Err = (msg) => {
        // Quiet configuration
        // console.error('[CacheMachine:' + _tableName + '] ' + msg);
    };

    /**
     * Saves cached table to localStorage
     * @func
     */
    let saveCache = () => {
        // Note: New timeStamp is created here
        _lastUpdated = new Date();
        return new Promise((resolve) => {
            localStorage.setItem(_LStableName, JSON.stringify(_tableData));
            localStorage.setItem(_LStableName + '_LASTUPDATED', String(_lastUpdated));
            resolve(finishUp());
        });

    };

    /**
     * Finishes up the init process
     * @func
     */
    let finishUp = () => {
        _cacheReady = true;
    };

    /**
     * Checks timeStamp on the table. Use the old version if no new data
     * @func
     */
    let checkCacheTime = () => {
        
        return new Promise((resolve) => {
            let lastUpdated = localStorage.getItem(_LStableName + '_LASTUPDATED');
            _lastUpdated = lastUpdated;
            if (!lastUpdated) {
                // Just initialised, just fetch the table
                resolve(fetchCache());
            } else {
                // Check time stamp
                let unixTime = Number(new Date(lastUpdated));
                Backendless.CustomServices.invoke('FilmService', 'hasNewData', unixTime).then((hasNewData) => {
                    if (hasNewData) {
                        // Server has new data. Fetch table from server
                        resolve(fetchCache());
                    } else {
                        // No new data. Just use the cached version
                        let tableStr = localStorage.getItem(_LStableName);
                        _tableData = JSON.parse(tableStr);
                        resolve(finishUp());
                    }
                });
            }
        });

    };

    /**
     * Fetches Data from the Server and Saves It
     * @func
     */
    let fetchCache = () => {
        let qb = Backendless.DataQueryBuilder.create();
        if (_isUserRelated) {
            // Note:
            //  This section uses "ownerId" to determine the relationship. Remember to
            //  'set relation' using this ownerId field.
            qb.setWhereClause( 'ownerId = ' + '\'' + Backendless.UserService.loggedInUser() + '\'');
        }
        return new Promise((resolve) => {
            Backendless.Data.of(_tableName).find( qb ).then((tableData) => {
                _tableData = tableData;
                resolve(saveCache());
            });
        });
        
    };

    /**
     * Initialises Cache Machine
     * @func
     */
    let initCache = () => {
        
        return new Promise((resolve, reject) => {
            let tableStr = localStorage.getItem(_LStableName);
            if (!tableStr) {
                // Not cached, get the table directly
                resolve(fetchCache());
            } else {
                // Compare timeStamp
                resolve(checkCacheTime());
            }
        });
    };

    /**
     * Cache of All Table Data
     * @prop {Array} tableData
     */
    Object.defineProperty(this, tableName, {
        get: () => {
            if (!_cacheReady) {
                Err('Cache for ' + _tableName + ' isn\'t ready yet!');
                return null;
            }
            return _tableData;
        },
        set: () => {
            Err('Cache is read only. Use CacheMachine::manualUpdate() to fetch new data from server.');
            return null;
        }
    });

    /**
     * Manually/forced update table data
     * @method
     * @returns {Promise}
     */
    CacheMachine.prototype.manualUpdate = () => {
        return fetchCache();
    };

    // Initialiser
    initCache().then(() => {
        _cacheReady = true;
    }).catch((err) => {
        console.error(err);
        return;
    });

};

export default CacheMachine;