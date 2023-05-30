f_flag=true
b_flag=true

while [ -n "$1" ]; do # while loop starts

	case "$1" in

	-b) echo "+-------------------+"
      echo "|    Only Backend   |" # Message for -a option
      echo "+-------------------+"

			f_flag=false
      b_flag=true;;

  -f) echo "+--------------------+"
      echo "|    Only Frontend   |"
      echo "+--------------------+"
      f_flag=true
      b_flag=false;;

	*) echo "Option $1 not recognized"
  exit;; # In case you typed a different option other than a,b,c

	esac

	shift
done

if ${b_flag}; then
echo "+---------------------------+"
echo "|  Building Backend image   |"
echo "+---------------------------+"
cd src/backend/docker
bash build.sh
cd ../../../
fi
if ${f_flag}; then
echo "+----------------------------+"
echo "|  Building Frontend image   |"
echo "+----------------------------+"
cd src/frontend/docker
bash build.sh
cd ../
fi
