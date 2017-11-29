# Mac

## Installing plist files

1. Download plist file from athena-desktop-group-policy/mac
2. Move plist file to `~/Library/Preferences/`

## Testing plist file installation

You can verify the file has been added to user defaults by running the `defaults` command:

```
$~ defaults read com.athenahealth.athenadesktop updatetrack
stable
```

## Building plist file

To build plist:
```
cd mac/
npm install
node plist-generator.js
```

plist is built from `plist.json` and generated plist is stored in `build/`
