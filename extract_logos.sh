#!/bin/bash

echo "=== ADIA ==="
curl -s https://www.adia.ae | grep -o 'src="[^"]*ADIA[^"]*\.svg"' | head -1

echo "=== ADAA ==="
curl -s https://www.adaa.gov.ae | grep -o 'src="[^"]*logo[^"]*\.svg"' | head -1

echo "=== MOFA ==="
curl -s https://www.mofa.gov.ae | grep -o 'src="[^"]*logo[^"]*\.(svg|png)"' | head -1

echo "=== DMT ==="
curl -s https://dmt.gov.ae | grep -o 'src="[^"]*DMT-Logo[^"]*\.svg"' | head -1

echo "=== DCT ==="
curl -s https://dct.gov.ae | grep -o 'src="[^"]*logo[^"]*\.(svg|png)"' | head -1

echo "Done"
