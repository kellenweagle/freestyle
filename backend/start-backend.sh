#!/bin/bash
echo "changing current directory to backend"
cd backend
echo "npm list"
npm list
echo "current working directory:"
pwd
echo "current environment:"
env
echo "running npm start"
npm start
