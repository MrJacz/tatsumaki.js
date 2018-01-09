declare module 'tatsumaki.js' {
    export const version: string;

    class TatsumakiClient {
        public constructor(key: string)

        public key: string;
        private baseUrl: string;

        public user(key: string): Promise<TatsumakiUser>;
        public guildLeaderboard(guildId: string): Promise<object[]>;

        private _get(endpoint: string, classobj?: any): Promise<any>;
    }

    export { TatsumakiClient as Client };

    export class TatsumakiUser {
        public title: string;
        public credits: number;
        public background: string;
        public name: string;
        public badges: string[];
        public rank: number;
        public level: number;
        public xp: number[];
        public currentXp: number;
        public nextLevelUpXp: number;
        public totalxp: number;
        public reputation: number;
        public info: string;
        public avatar: string;

        private rawData: object;
    }
}
