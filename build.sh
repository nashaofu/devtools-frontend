# 获取当前脚本目录
DIR=$(cd "$(dirname "$0")"; pwd)

# 保证所有命令都在文件所在目录下执行，而不是在默认pwd下执行
cd $DIR

cd devtools/devtools-frontend

export PATH=$PATH:$DIR/devtools/depot-tools

gn gen out/Default
autoninja -C out/Default

mv out/Default/gen/front_end $DIR/devtools-frontend
