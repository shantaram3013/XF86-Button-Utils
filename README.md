# XF86-Button-Utils
Utility scripts and mappings to XF86 buttons for Linux computers for toggling a variety of useful settings.  

### DEPENDENCIES
These could be in your distro repos, be sure to check those before building from source.  

`corrupter`: https://github.com/r00tman/corrupter  
`ImageMagick`: https:/www.imagemagick.org/  
`i3lock`: https://github.com/i3/i3lock  
`nmcli`  
`xbacklight`: https://gitlab.freedesktop.org/xorg/app/xbacklight  
`xinput`: https://gitlab.freedesktop.org/xorg/app/xinput  
`thinkpad-scripts`: (needed for rotate) https://github.com/martin-ueding/thinkpad-scripts  
`TouchscreenToggle`: (needed for toggle_touch) https://github.com/shantaram3013/TouchscreenToggle  
`xrandr`: (needed for toggle_mm) https://gitlab.freedesktop.org/xorg/app/xrandr  
`pamixer`: https://github.com/cdemoulins/pamixer  
A polkit agent: Needed for toggling the webcam, which uses modprobe to add and remove the uvcvideo module.  
`notify-send` and a notification daemon such as `dunst`: Almost all the scripts send notifications to alert of changes taking place on your system. `notify-send` is used for this.  
`playerctl`: For audio commands.  

### USAGE
Openbox users: Use `OB_keymap_gen.js` to generate an XML markup you can copy straight into your `rc.xml`. You'll need to set the SCRIPT_PATH variable to point the generator at the right location of the `scripts/` directory.  
Others can use the following mapping of keys to scripts, or just define their own.  
Make sure to set the `$notifier_username` and `$notifier_uid` in webcam-toggle correctly. These should be the uid and username of your user.  
```
{
    "XF86ScreenSaver":       SCRIPT_PATH + "/corrupterlck", // screen locker that uses ImageMagick, corrupter, and i3lock to set a "corrupted" screenshot as the background for i3lock
    "XF86Battery":           SCRIPT_PATH + "/scripts/battery-saver", // Script to toggle CPU clock speeds and brightness levels.
    "XF86WLAN":              SCRIPT_PATH + "/scripts/wifi-toggle", // Toggles WiFi using nmcli
    "XF86Display":           SCRIPT_PATH + "/scripts/screen-toggle", // Uses xbacklight to toggle brightness between 0 and the current brightness.
    "XF86TouchpadToggle":    SCRIPT_PATH + "/scripts/touchpad-toggle", // Toggles the touchpad. Useful on machines that feature an alternate pointing device.
    // Feel free to delete the next three lines since these are specific to my machine
    "XF86TaskPane":          SCRIPT_PATH + "/scripts/rotate", // Rotate button on my ThinkPad, I use it for the ThinkPad-rotate script.
    "XF86Launch1":           SCRIPT_PATH + "/scripts/toggle_touch", // ThinkVantage button on my ThinkPad, I use it for https://github.com/shantaram3013/TouchscreenToggle/
    "XF86RotateWindows":     SCRIPT_PATH + "/scripts/toggle_mm", // I use the Landscape-->Portrait button on my ThinkPad to toggle my multi-monitor setup.
    "XF86AudioMicMute":      "pamixer -t --source 1",
    "XF86WebCam":            "pkexec " + SCRIPT_PATH + "/webcam-toggle", // we need pkexec because modprobe needs to be run as root
    "XF86MonBrightnessUp":   "xbacklight -inc 5; notify-send 'Brightness Up'",
    "XF86MonBrightnessDown": "xbacklight -dec 5; notify-send 'Brightness Down'",
    "XF86AudioStop":         "playerctl stop",
    "XF86AudioPlay":         "playerctl play-pause",
    "XF86AudioPrev":         "playerctl previous",
    "XF86AudioNext":         "playerctl next"
}
```
Looking for a volume script? See https://github.com/shantaram3013/volume!
