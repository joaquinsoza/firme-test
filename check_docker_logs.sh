#!/bin/bash
isSelected=false
while [ -n "$1" ]; do # while loop starts

	case "$1" in

	-b) echo "+--------------------------+"
      echo "|  Check logs in backend   |"
      echo "+--------------------------+"
      containerName=firme-backend-1
      isSelected=true
      ;;

	-f) echo "+--------------------------+"
      echo "|  Check logs in frontend   |"
      echo "+--------------------------+"
      containerName=firme-frontend-1
      isSelected=true
      ;;

  -h)

echo "Usage: ./check_docker_logs.sh [OPTION]"
echo "Connect to logs of the container specified in OPTION"
echo ""
echo " OPTIONs availables"
echo "-b          backend"
echo "-f          frontend"
exit
      ;;
	*) echo "Option $1 not recognized"
  exit;; # In case you typed a different option other than a,b,c

	esac

	shift
done

if ${isSelected}; then
  echo "Opening logs "
  docker logs --follow $containerName
else
  echo "please specify a container"
fi
