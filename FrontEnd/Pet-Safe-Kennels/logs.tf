resource "aws_cloudwatch_log_group" "kennels_app" {
  name              = "/ecs/kennels"
  retention_in_days = 1
}