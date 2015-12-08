#!/bin/bash

rm -rf lib
edp build -f -s cmd
mv output/asset lib
rm -rf output
