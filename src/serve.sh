#!/usr/bin/env bash
me=$(readlink -e ${BASH_SOURCE})
here=$(dirname ${me})
scriptdir=${1:-${here}}
port=${2:-8888}

set -x
# deno -A https://raw.githubusercontent.com/denoland/deno_std/master/http/file_server.ts ${scriptdir} ${port}
# default: 0.0.0.0:4500
# TODO see above, which doesn't work
(cd ${scriptdir} ; deno -A https://raw.githubusercontent.com/denoland/deno_std/master/http/file_server.ts )

