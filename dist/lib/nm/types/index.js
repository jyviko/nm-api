"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkManagerTypes = void 0;
var NetworkManagerTypes = (function () {
    function NetworkManagerTypes() {
    }
    NetworkManagerTypes.CAPABILITY = {
        TEAM: 1,
    };
    NetworkManagerTypes.STATE = {
        UNKNOWN: 0,
        ASLEEP: 10,
        DISCONNECTED: 20,
        DISCONNECTING: 30,
        CONNECTING: 40,
        CONNECTED_LOCAL: 50,
        CONNECTED_SITE: 60,
        CONNECTED_GLOBAL: 70,
    };
    NetworkManagerTypes.CONNECTIVITY = {
        UNKNOWN: 0,
        NONE: 1,
        PORTAL: 2,
        LIMITED: 3,
        FULL: 4,
    };
    NetworkManagerTypes.DEVICE_TYPE = {
        UNKNOWN: 0,
        GENERIC: 14,
        ETHERNET: 1,
        WIFI: 2,
        UNUSED1: 3,
        UNUSED2: 4,
        BT: 5,
        OLPC_MESH: 6,
        WIMAX: 7,
        MODEM: 8,
        INFINIBAND: 9,
        BOND: 10,
        VLAN: 11,
        ADSL: 12,
        BRIDGE: 13,
        TEAM: 15,
        TUN: 16,
        IP_TUNNEL: 17,
        MACVLAN: 18,
        VXLAN: 19,
        VETH: 20,
        MACSEC: 21,
        DUMMY: 22,
        PPP: 23,
        OVS_INTERFACE: 24,
        OVS_PORT: 25,
        OVS_BRIDGE: 26,
    };
    NetworkManagerTypes.DEVICE_CAP = {
        NONE: 0x00000000,
        NM_SUPPORTED: 0x00000001,
        CARRIER_DETECT: 0x00000002,
        IS_SOFTWARE: 0x00000003,
        SRIOV: 0x00000004,
    };
    NetworkManagerTypes.WIFI_DEVICE_CAP = {
        NONE: 0x00000000,
        CIPHER_WEP40: 0x00000001,
        CIPHER_WEP104: 0x00000002,
        CIPHER_TKIP: 0x00000004,
        CIPHER_CCMP: 0x00000008,
        WPA: 0x00000010,
        RSN: 0x00000020,
        AP: 0x00000040,
        ADHOC: 0x00000080,
        FREQ_VALID: 0x00000100,
        FREQ_2GHZ: 0x00000200,
        FREQ_5GHZ: 0x00000400,
    };
    NetworkManagerTypes.AP_802_11S = {
        NONE: 0x00000000,
        PRIVACY: 0x00000001,
        WPS: 0x00000002,
        WPS_PBC: 0x00000004,
        WPS_PIN: 0x00000008,
    };
    NetworkManagerTypes.AP_802_11_SEC = {
        NONE: 0x00000000,
        PAIR_WEP40: 0x00000001,
        PAIR_WEP104: 0x00000002,
        PAIR_TKIP: 0x00000004,
        PAIR_CCMP: 0x00000008,
        GROUP_WEP40: 0x00000010,
        GROUP_WEP104: 0x00000020,
        GROUP_TKIP: 0x00000040,
        GROUP_CCMP: 0x00000080,
        KEY_MGMT_PSK: 0x00000100,
        KEY_MGMT_802_1X: 0x00000200,
    };
    NetworkManagerTypes.MODE_802_11 = {
        UNKNOWN: 0,
        ADHOC: 1,
        INFRA: 2,
        AP: 3,
    };
    NetworkManagerTypes.BT_CAPABILITY = {
        NONE: 0x00000000,
        DUN: 0x00000001,
        NAP: 0x00000002,
    };
    NetworkManagerTypes.DEVICE_MODEM_CAPABILITY = {
        NONE: 0x00000000,
        POTS: 0x00000001,
        CDMA_EVDO: 0x00000002,
        GSM_UMTS: 0x00000004,
        LTE: 0x00000008,
    };
    NetworkManagerTypes.WIMAX_NSP_NETWORK_TYPE = {
        UNKNOWN: 0,
        HOME: 1,
        PARTNER: 2,
        ROAMING_PARTNER: 3,
    };
    NetworkManagerTypes.DEVICE_STATE = {
        UNKNOWN: 0,
        UNMANAGED: 10,
        UNAVAILABLE: 20,
        DISCONNECTED: 30,
        PREPARE: 40,
        CONFIG: 50,
        NEED_AUTH: 60,
        IP_CONFIG: 70,
        IP_CHECK: 80,
        SECONDARIES: 90,
        ACTIVATED: 100,
        DEACTIVATING: 110,
        FAILED: 120,
    };
    NetworkManagerTypes.DEVICE_STATE_REASON = {
        NONE: 0,
        UNKNOWN: 1,
        NOW_MANAGED: 2,
        NOW_UNMANAGED: 3,
        CONFIG_FAILED: 4,
        IP_CONFIG_UNAVAILABLE: 5,
        IP_CONFIG_EXPIRED: 6,
        NO_SECRETS: 7,
        SUPPLICANT_DISCONNECT: 8,
        SUPPLICANT_CONFIG_FAILED: 9,
        SUPPLICANT_FAILED: 10,
        SUPPLICANT_TIMEOUT: 11,
        PPP_START_FAILED: 12,
        PPP_DISCONNECT: 13,
        PPP_FAILED: 14,
        DHCP_START_FAILED: 15,
        DHCP_ERROR: 16,
        DHCP_FAILED: 17,
        SHARED_START_FAILED: 18,
        SHARED_FAILED: 19,
        AUTOIP_START_FAILED: 20,
        AUTOIP_ERROR: 21,
        AUTOIP_FAILED: 22,
        MODEM_BUSY: 23,
        MODEM_NO_DIAL_TONE: 24,
        MODEM_NO_CARRIER: 25,
        MODEM_DIAL_TIMEOUT: 26,
        MODEM_DIAL_FAILED: 27,
        MODEM_INIT_FAILED: 28,
        GSM_APN_FAILED: 29,
        GSM_REGISTRATION_NOT_SEARCHING: 30,
        GSM_REGISTRATION_DENIED: 31,
        GSM_REGISTRATION_TIMEOUT: 32,
        GSM_REGISTRATION_FAILED: 33,
        GSM_PIN_CHECK_FAILED: 34,
        FIRMWARE_MISSING: 35,
        REMOVED: 36,
        SLEEPING: 37,
        CONNECTION_REMOVED: 38,
        USER_REQUESTED: 39,
        CARRIER: 40,
        CONNECTION_ASSUMED: 41,
        SUPPLICANT_AVAILABLE: 42,
        MODEM_NOT_FOUND: 43,
        BT_FAILED: 44,
        GSM_SIM_NOT_INSERTED: 45,
        GSM_SIM_PIN_REQUIRED: 46,
        GSM_SIM_PUK_REQUIRED: 47,
        GSM_SIM_WRONG: 48,
        INFINIBAND_MODE: 49,
        DEPENDENCY_FAILED: 50,
        BR2684_FAILED: 51,
        MODEM_MANAGER_UNAVAILABLE: 52,
        SSID_NOT_FOUND: 53,
        SECONDARY_CONNECTION_FAILED: 54,
        DCB_FCOE_FAILED: 55,
        TEAMD_CONTROL_FAILED: 56,
        MODEM_FAILED: 57,
        MODEM_AVAILABLE: 58,
        SIM_PIN_INCORRECT: 59,
        NEW_ACTIVATION: 60,
        PARENT_CHANGED: 61,
        PARENT_MANAGED_CHANGED: 62,
        OVSDB_FAILED: 63,
        IP_ADDRESS_DUPLICATE: 64,
        IP_METHOD_UNSUPPORTED: 65,
    };
    NetworkManagerTypes.METERED = {
        UNKNOWN: 0,
        YES: 1,
        NO: 2,
        GUESS_YES: 3,
        GUESS_NO: 4,
    };
    NetworkManagerTypes.ACTIVE_CONNECTION_STATE = {
        UNKNOWN: 0,
        ACTIVATING: 1,
        ACTIVATED: 2,
        DEACTIVATING: 3,
        DEACTIVATED: 4,
    };
    NetworkManagerTypes.ACTIVE_CONNECTION_STATE_REASON = {
        UNKNOWN: 0,
        NONE: 1,
        USER_DISCONNECTED: 2,
        DEVICE_DISCONNECTED: 3,
        SERVICE_STOPPED: 4,
        IP_CONFIG_INVALID: 5,
        CONNECT_TIMEOUT: 6,
        SERVICE_START_TIMEOUT: 7,
        SERVICE_START_FAILED: 8,
        NO_SECRETS: 9,
        LOGIN_FAILED: 10,
        CONNECTION_REMOVED: 11,
        DEPENDENCY_FAILED: 12,
        DEVICE_REALIZE_FAILED: 13,
        DEVICE_REMOVED: 14,
    };
    NetworkManagerTypes.SECRET_AGENT_GET_SECRETS = {
        NONE: 0x0,
        ALLOW_INTERACTION: 0x1,
        REQUEST_NEW: 0x2,
        USER_REQUESTED: 0x4,
        WPS_PBC_ACTIVE: 0x8,
        ONLY_SYSTEM: 0x80000000,
        NO_ERRORS: 0x40000000,
    };
    NetworkManagerTypes.SECRET_AGENT_CAPABILITY = {
        NONE: 0x0,
        VPN_HINTS: 0x1,
    };
    NetworkManagerTypes.IP_TUNNEL_MODE = {
        UNKNOWN: 0,
        IPIP: 1,
        GRE: 2,
        SIT: 3,
        ISATAP: 4,
        VTI: 5,
        IP6IP6: 6,
        IPIP6: 7,
        IP6GRE: 8,
        VTI6: 9,
    };
    NetworkManagerTypes.CHECKPOINT_CREATE = {
        NONE: 0,
        DESTROY_ALL: 0x01,
        DELETE_NEW_CONNECTIONS: 0x02,
        DISCONNECT_NEW_DEVICES: 0x04,
    };
    NetworkManagerTypes.ROLLBACK_RESULT = {
        OK: 0,
        ERR_NO_DEVICE: 1,
        ERR_DEVICE_UNMANAGED: 2,
        ERR_FAILED: 3,
    };
    NetworkManagerTypes.ACTIVATION_STATE = {
        NONE: 0,
        IS_MASTER: null,
        IS_SLAVE: null,
        LAYER2_READY: null,
        IP4_READY: null,
        IP6_READY: null,
        MASTER_HAS_SLAVES: null,
    };
    NetworkManagerTypes.SETTINGS_UPDATE2 = {
        NONE: 0,
        TO_DISK: null,
        IN_MEMORY: null,
        IN_MEMORY_DETACHED: null,
        IN_MEMORY_ONLY: null,
        VOLATILE: null,
        BLOCK_AUTOCONNECT: null,
    };
    return NetworkManagerTypes;
}());
exports.NetworkManagerTypes = NetworkManagerTypes;
//# sourceMappingURL=index.js.map