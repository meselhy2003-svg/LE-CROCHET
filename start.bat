@echo off
title LE CROCHET - React Application
cd /d "%~dp0"
echo ========================================================
echo   Starting LE CROCHET React Development Server...
echo ========================================================
start http://localhost:3000
npm run dev
pause
