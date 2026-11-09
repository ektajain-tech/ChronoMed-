@echo off
cd /d "%~dp0"
start "ChronoMed development server" cmd /k "npm run dev"
timeout /t 4 /nobreak >nul
start "" "http://localhost:5173/"
