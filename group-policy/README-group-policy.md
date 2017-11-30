# Windows

## Installing ADMX/ADML files

1. Download ADMX and ADML files from athenaDesktop/group-policy/windows
2. Move ADMX file into `%systemroot%\PolicyDefinitions\`
3. Move ADML file into `%systemroot%\PolicyDefinitions\en-US\`
4. Start->Run->gpedit.msc
5. The settings should load. User policies can be found under User Configuration->Administrative Templates->athenaDesktop. Machine policies can be found under Computer Configuration->Administrative Templates->athenaDesktop.
6. Click on setting, enable it, choose perference and click Apply to apply to Windows Registry
7. Key should be visible in Start->Run->regedit.exe. User policies will set keys in HKEY_CURRENT_USER->Software->Policies->athenaDesktop. Machine policies will set keys in HKEY_LOCAL_MACHINE->Software->Policies->athenaDesktop.

# Mac

## Installing policies.json

1. Download the policies.json file from athenaDesktop/group-policy/mac
2. Copy the file to `~/Library/Application Support/athenaDesktop`
