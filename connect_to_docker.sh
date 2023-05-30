#!/bin/bash
isSelected=false
while [ -n "$1" ]; do # while loop starts

	case "$1" in

	-b) echo "+-----------------------+"
      echo "|  Connect to backend   |"
      echo "+-----------------------+"
      containerName=firme-backend-1
      isSelected=true
      ;;

	-f) echo "+------------------------+"
      echo "|  Connect to frontend   |"
      echo "+------------------------+"
      containerName=firme-frontend-1
      isSelected=true
      ;;
  -m) echo "+-----------------------+"
      echo "|  Connect to MongoDB   |"
      echo "+-----------------------+"
      containerName=firme-mongodb-1
      isSelected=true
      ;;

  -h)

echo "Usage: ./connect_to_docker.sh [OPTION]"
echo "Connect to a bash terminal of the container specified in OPTION"
echo ""
echo " OPTIONs availables"
echo "-b          backend"
echo "-f          frontend"
echo "-m          mongodb"
exit
      ;;
	*) echo "Option $1 not recognized"
  exit;; # In case you typed a different option other than a,b,c

	esac

	shift
done

if ${isSelected}; then
  echo "Opening bash console"
  docker exec --tty --interactive $containerName bash
else
  echo "please specify a container"
fi
