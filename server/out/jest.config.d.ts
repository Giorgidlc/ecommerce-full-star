declare const config: {
    preset: string;
    testEnvironment: string;
    collectCoverage: boolean;
    coveragePathIgnorePatterns: string[];
    moduleFileExtensions: string[];
    transform: {
        '^.+\\.(t|j)sx?$': string;
    };
};
export default config;
