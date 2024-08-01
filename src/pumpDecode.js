import * as web3 from '@solana/web3.js';
import { BondingCurveLayout } from './PUMP_LAYOUT.js';
import fs from 'fs';

async function GPA(bonding_curve) {
    const config = JSON.parse(fs.readFileSync('./config.json', 'utf8'));
    const rpcURL = config.RPC_URL;
    const wsURL = config.WS_URL;
    
    const conn = new web3.Connection(rpcURL, {
        commitment: 'confirmed',
        wsEndpoint: wsURL
    });

    try {
        const curve = new web3.PublicKey(bonding_curve);
        const data = await conn.getAccountInfo(curve, {
            commitment: 'confirmed'
        });
        if (data === null) {
            throw new Error("Error Parsing Data, Likely RPC Issue.");
        }

        const buffer = Buffer.from(data.data).slice(8);
        const decodedData = BondingCurveLayout.deserialize(buffer);
        const vTokenReserve = decodedData.virtualTokenReserves.toString();
        const vSolReserve = decodedData.virtualSolReserves.toString();
        const rTokenReserves = decodedData.realTokenReserves.toString();
        const rSolReserves = decodedData.realSolReserves.toString();
        const tokenTotalSupply = decodedData.tokenTotalSupply.toString();
        const adjustedVTokenReserve = vTokenReserve / 10 ** 6;
        const adjustedVSolReserve = vSolReserve / 10 ** 9;
        const virtualTokenPrice = adjustedVSolReserve / adjustedVTokenReserve;

        return {
            vTokenReserve,
            vSolReserve,
            rTokenReserves,
            rSolReserves,
            tokenTotalSupply,
            adjustedVTokenReserve,
            adjustedVSolReserve,
            virtualTokenPrice
        };
    } catch (error) {
        const logFilePath = "./logs.txt";
        const errorMessage = `Error occurred: ${error.message || error}\n`;
        fs.appendFileSync(logFilePath, errorMessage);
        console.log("An error occurred, check logs.txt for more information.");
        throw error; // Rethrow the error after logging it
    }
}
export default GPA;