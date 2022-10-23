#!/bin/sh
[ -z "$LOG_PREFIX" ] && LOG_PREFIX="[.husky/???]"

# as opposed to echo, interpret C escape sequences properly in all envs
replay() {
  printf '%s\n' "$*"
}

# Print to stdout as messages with a prefix of $LOG_PREFIX
log() {
  replay "$@" | awk -v "PREFIX=$LOG_PREFIX" -F '\\\\n' '{print PREFIX " " $1}'
}

# Print to stderr as messages with a prefix of $LOG_PREFIX
error() {
  replay "$@" | awk >&2 -v "PREFIX=$LOG_PREFIX" -F '\\\\n' '{print PREFIX " " $1}'
}

# Prints and runs command
explicit_run_cmd() {
  cmd="$1"
  log "$> $cmd"
  eval "$cmd"
}

# Unset all functions/vars this utils file creates
cleanup() {
  unset -v LOG_PREFIX
  unset -f cleanup replay log error explicit_run_cmd
}
