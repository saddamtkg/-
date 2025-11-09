@echo off
echo ========================================
echo  GitHub Repository Setup Script
echo ========================================
echo.

REM Check if git is installed
git --version >nul 2>&1
if errorlevel 1 (
    echo [ERROR] Git is not installed!
    echo Please install Git from: https://git-scm.com/downloads
    pause
    exit /b 1
)

echo [INFO] Git is installed
echo.

REM Check if already a git repository
if exist .git (
    echo [INFO] Git repository already initialized
) else (
    echo [INFO] Initializing Git repository...
    git init
)

echo.
echo [INFO] Adding all files...
git add .

echo.
set /p commit_msg="Enter commit message (or press Enter for default): "
if "%commit_msg%"=="" set commit_msg=Initial commit: Interactive JavaScript Learning Platform

echo.
echo [INFO] Committing changes...
git commit -m "%commit_msg%"

echo.
echo ========================================
echo  Next Steps:
echo ========================================
echo.
echo 1. Go to GitHub.com and create a new repository
echo 2. Copy the repository URL
echo 3. Run these commands:
echo.
echo    git remote add origin YOUR-REPOSITORY-URL
echo    git branch -M main
echo    git push -u origin main
echo.
echo 4. Then enable GitHub Pages in repository Settings
echo.
echo ========================================
pause

