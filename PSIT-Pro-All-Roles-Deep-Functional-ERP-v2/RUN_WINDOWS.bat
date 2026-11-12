@echo off
cd /d "%~dp0"
echo Starting PSIT Pro and checking all module tables...
call npm run dev
if errorlevel 1 (
  echo.
  echo PSIT Pro stopped because of the error shown above.
  echo If this is the first run, double-click SETUP_WINDOWS.bat first.
)
pause
