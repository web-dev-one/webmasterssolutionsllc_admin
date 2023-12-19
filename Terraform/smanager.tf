data "aws_secretsmanager_secret" "account" {
  name = "aws-account-id"
}

data "aws_secretsmanager_secret_version" "account_id" {
  secret_id = data.aws_secretsmanager_secret.account.id
}

data "aws_secretsmanager_secret" "codestar" {
  name = "code-star-creds"
}

data aws_secretsmanager_secret_version codestar_creds {
  secret_id = data.aws_secretsmanager_secret.codestar.id
}

data aws_secretsmanager_secret docker {
  name = "dockerhub-creds"
}

data aws_secretsmanager_secret_version dockerhub {
  secret_id = data.aws_secretsmanager_secret.docker.id
}

data aws_secretsmanager_secret docker_s_arn {
  arn = "arn:aws:secretsmanager:us-east-1:${jsondecode(data.aws_secretsmanager_secret_version.account_id.secret_string)["AWS_ACCOUNT_ID"]}:secret:dockerhub-creds"
}

data aws_secretsmanager_secret codestar_arn {
  arn = nonsensitive("arn:aws:secretsmanager:us-east-1:${jsondecode(data.aws_secretsmanager_secret_version.account_id.secret_string)["AWS_ACCOUNT_ID"]}:secret:code-star-creds")
}