# docker-cluster
Tomcat Clustering inside the Docker (docker-compose version 1.3, for 1.6, see `docker-compose-1.6` branch)

# Creating cluster
`docker-compose up`

# Stoping/Starting cluster

`docker-compose stop` and `docker-compose start`

# Scaling applications
Use `docker-compose scale nameOfContainer=numberOfScale` whereas numberOfScale default is 1

# Deploying application
Simple put your .jsp application in cluster/ROOT

# TO-DO's
- Use apache instead of tomcat image (for non java web application)
- Deploy containers on PaaS/SaaS provider

# Tips
- The name of project is the first line of `docker-compose.yml`.
- When using `links` attrb, all containers are created with `dockercluster_` prefix and `_X` suffix, whereas X is the scale position of container. Also, in `tomcatOne:tomcat1`, `tomcat1` is the reference of container `tomcatOne` to `nginx` container.
- `volume` attrb is the "copy&paste" between host and container.
- You can start cluster in daemon mode (hide the log from console) with `docker-compose start -d`
