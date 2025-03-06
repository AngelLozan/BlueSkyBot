import {main} from './index';
import { describe, test, expect } from "@jest/globals"

describe('index', () => {
    test('main', async () => {
        await expect(main()).resolves.toBeUndefined();
    })
});