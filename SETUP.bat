@echo off
echo ========================================
echo Fresh Farm Poultry - Quick Start
echo ========================================
echo.

echo Step 1: Installing Backend Dependencies...
cd backend
call npm install
echo.

echo Step 2: Seeding Database with Products...
call npm run seed
echo.

echo Step 3: Installing Frontend Dependencies...
cd ..\frontend
call npm install
echo.

echo ========================================
echo Installation Complete!
echo ========================================
echo.
echo To start the application:
echo.
echo 1. Backend: cd backend && npm run dev
echo 2. Frontend: cd frontend && npm run dev
echo.
echo Backend will run on: http://localhost:5000
echo Frontend will run on: http://localhost:5173
echo Admin Dashboard: http://localhost:5173/admin
echo.
pause
