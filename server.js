const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();

// api file for interacting with mongoDB
const api = require('../server/routes/api');