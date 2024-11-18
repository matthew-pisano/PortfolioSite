export default {
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1'
    },
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    }
};