import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import connectDB from './config/connectDb.js';

dotenv.config();
const PORT = process.env.PORT || 5000;
