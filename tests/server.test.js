const request = require('supertest');
const express = require('express');

describe('Server Health Tests', () => {
    describe('Express App Initialization', () => {
        test('Proper App Initialize', () => {
            const app = require('../index');
            expect(app).toBeDefined();
            expect(typeof app).toBe('function');
        });
    });

    describe('Database Connection', () => {
        test('Succesfull Connection', async () => {
            const { poolPromise } = require('../config/database');

            const pool = await poolPromise;
            expect(pool).toBeDefined();

            // Query
            const result = await pool.request().query('SELECT @@VERSION AS version');
            expect(result).toBeDefined();
            expect(result.recordset).toBeDefined();
            expect(result.recordset[0].version).toBeDefined();
            expect(typeof result.recordset[0].version).toBe('string');
        }, 15000); // 15 second timeout for DB connection

        test('Database config should have required properties', () => {
            const { sql } = require('../config/database');
            expect(sql).toBeDefined();
            expect(sql.ConnectionPool).toBeDefined();
        });
    });

    describe('Environment Variables', () => {
        test('Required env variables set', () => {
            expect(process.env.DB_USERNAME).toBeDefined();
            expect(process.env.DB_PASSWORD).toBeDefined();
            expect(process.env.DB_SERVER).toBeDefined();
            expect(process.env.DB_DATABASE).toBeDefined();
            expect(process.env.SESSION_SECRET).toBeDefined();
        });
    });
});
