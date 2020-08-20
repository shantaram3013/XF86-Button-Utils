const SCRIPT_PATH = "$HOME"; // location of the scripts directory
let actions = {
    "XF86ScreenSaver":       SCRIPT_PATH + "/corrupterlck",
    "XF86Battery":           SCRIPT_PATH + "/scripts/battery-saver",
    "XF86WLAN":              SCRIPT_PATH + "/scripts/wifi-toggle",
    "XF86Display":           SCRIPT_PATH + "/scripts/screen-toggle",
    "XF86TouchpadToggle":    SCRIPT_PATH + "/scripts/touchpad-toggle",
    "XF86WebCam":            SCRIPT_PATH + "/webcam-toggle", // we need pkexec because modprobe needs to be run as root
    // Feel free to delete the next three lines since these are specific to my machine and others like it
    "XF86TaskPane":          SCRIPT_PATH + "/scripts/rotate", // Rotate button on my ThinkPad, I use it for the ThinkPad-rotate script.
    "XF86Launch1":           SCRIPT_PATH + "/scripts/toggle_touch", // ThinkVantage button on my ThinkPad, I use it for https://github.com/shantaram3013/TouchscreenToggle/
    "XF86RotateWindows":     SCRIPT_PATH + "/scripts/toggle_mm", // I use the Landscape-->Portrait button on my ThinkPad to toggle my multi-monitor setup.
    "XF86AudioMicMute":      "pamixer -t --source 1",
    "XF86MonBrightnessUp":   "xbacklight -inc 5; notify-send 'Brightness Up'",
    "XF86MonBrightnessDown": "xbacklight -dec 5; notify-send 'Brightness Down'",
    "XF86AudioStop":         "playerctl stop",
    "XF86AudioPlay":         "playerctl play-pause",
    "XF86AudioPrev":         "playerctl previous",
    "XF86AudioNext":         "playerctl next"
}

for (test of Object.keys(actions)) {
    console.log(`    <keybind key="${test}">\n      <action name="Execute">\n        <command> ${actions[test]} </command>\n      </action>\n    </keybind>\n`); # for openbox rc.xml
}
