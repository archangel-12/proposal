url="https://ash-speed.hetzner.com/10GB.bin"

output=$(wget --report-speed=bits -O /dev/null "$url" 2>&1)

speed=$(echo "$output" | grep -oP '(?<=\().+?(?=\))')

echo "Download speed: $speed"