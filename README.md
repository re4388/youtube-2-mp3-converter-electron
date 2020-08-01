
# Youtube to Mp3 Desktop converter


## How to build
- Go [ytdl-org/youtube-dl: Command-line program to download videos from YouTube.com and other video sites](https://github.com/ytdl-org/youtube-dl) and get executable for your OS.
- Put the executable in the root folder
- Run build command
```shell
    npm run dist
```

## To do list
- not try build on Linux
- Mac build still have some issue, can not copy paste into field

# Original Readme

1. Install GitHub's Electron
2. Clone this repository
3. initialize node modules
4. run application

#### Install GitHub's Electron
```Shell
$ sudo npm install electron-prebuilt -g
```
#### Clone this repository
```Shell
$ mkdir ~/projects/
$ git clone https://github.com/martinjackson/electron-run-shell-example.git
$ cd electron-run-shell-example
```
#### initialize node modules
```Shell
$ npm install
```
#### run application
```Shell
$ npm start
--- or ---
$ electron .
```
