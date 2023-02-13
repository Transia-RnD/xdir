import { Network } from '../types/networks';
import { NetworkObjType } from '../types/gen';

import registry from '../networks.json';

// read all networks json
const networks = registry.networks;

// instantiate usable map of id
const map: Map<string, string | null> = new Map();
networks.forEach((network: Network) => {
  return map.set(network.name, network.type);
});

/**
 * An object of default network identifiers indexed by network name.
 * https://github.com/standardconnect/xdir/blob/main/src/utils/id.ts
 *
 * @example
 * ```ts
 * import xdir from 'xdir';
 *
 * const mainnet_id = xdir.id.mainnet // "0"
 * ```
 */
export const obj: NetworkObjType = Object.create(Object.fromEntries(map));

export default { obj, map };
