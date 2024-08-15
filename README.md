<p align="center">
  <a href="https://fans-crm.com/" target="blank"><img src="https://free-cdn.fastpixel.io/fp/ret_wait+v_841b+q_glossy+to_webp/fans-crm.com/wp-content/uploads/2023/08/logo@2x-1.svg" width="200" alt="NovaPay Logo" /></a>
</p>

# Test task

## Description

[Requirements here](https://drive.google.com/file/d/1qh3B6dBfIk9QoQn-lEyG2cU7d61XEKHn/view)

## Running the app

```bash
# running the database
$ docker run --rm -it -e MYSQL_DATABASE='test-task' -e MYSQL_USER='test' -e MYSQL_PASSWORD='test' -e MYSQL_ROOT_PASSWORD='root' -p 3306:3306 --name fans-crm-test-task-db mysql:9.0
```
```bash
# running the server
$ yarn start:server
```
```bash
# running the api demo
$ yarn demo
```
