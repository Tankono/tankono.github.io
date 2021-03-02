echo 'Synchronize git repository'
commitmsg="update source code"
if [ -z "$1" ]
	commitmsg=$1
  then
    echo "update default message:"$commitmsg
fi

git pull
git add .
git commit -m"$commitmsg"
git push
