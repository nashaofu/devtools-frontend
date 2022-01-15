# 获取当前脚本目录
DIR=$(cd "$(dirname "$0")"; pwd)

# 保证所有命令都在文件所在目录下执行，而不是在默认pwd下执行
cd $DIR

rm -rf devtools

mkdir -p devtools

cd devtools

git clone https://chromium.googlesource.com/chromium/tools/depot_tools.git depot-tools --depth=1

export PATH=$PATH:$DIR/devtools/depot-tools

fetch devtools-frontend