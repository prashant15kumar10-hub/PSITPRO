@echo off
cd /d "%~dp0"
echo Setting up PSIT Pro with all role module data...
call npm run setup
if errorlevel 1 (
  echo.
  echo Setup stopped. Read the error above, fix it, then run this file again.
  pause
  exit /b 1
)
echo.
echo Setup complete. Double-click RUN_WINDOWS.bat to start PSIT Pro.
pause
