## CODEPIPELINE ##
resource "aws_iam_role" "pipeline-role" {
  name = "${var.name}-pipeline-role"
  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Sid    = ""
        Principal = {
          Service = "codepipeline.amazonaws.com"
        }
      },
    ]
  })
}

data "aws_iam_policy_document" "cicd-pipeline-policies" {
  statement {
    sid       = ""
    actions   = ["codestar-connections:UseConnection"]
    resources = ["*"]
    effect    = "Allow"
  }
  statement {
    sid       = ""
    actions   = ["cloudwatch:*", "s3:*", "codebuild:*", "ecr:*"]
    resources = ["*"]
    effect    = "Allow"
  }
}

resource "aws_iam_policy" "cicd-pipeline-policy" {
  name        = "tf-cicd-pipeline-policy"
  path        = "/"
  description = "Pipeline policy"
  policy      = data.aws_iam_policy_document.cicd-pipeline-policies.json
}

resource "aws_iam_role_policy_attachment" "cicd-pipeline-attachment" {
  policy_arn = aws_iam_policy.cicd-pipeline-policy.arn
  role       = aws_iam_role.pipeline-role.id
}

## CODEBUILD ##
resource "aws_iam_role" "codebuild-role" {
  name = "${var.name}-codebuild-role"
  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Sid    = ""
        Principal = {
          Service = "codebuild.amazonaws.com"
        }
      },
    ]
  })
}

data "aws_iam_policy_document" "cicd-build-policies" {
  statement {
    sid       = ""
    actions   = ["logs:*", "s3:*", "codebuild:*", "secretsmanager:*", "iam:*", "ecr:*", "ecr:completeLayerUpload", "ecr:InitiateLayerUpload", "ecr:PutImage", "ecr:UploadLayerPart"]
    resources = ["*"]
    effect    = "Allow"
  }
}

resource "aws_iam_policy" "cicd-build-policy" {
  name        = "cicd-build-policy"
  path        = "/"
  description = "Codebuild policy"
  policy      = data.aws_iam_policy_document.cicd-build-policies.json
}

resource "aws_iam_role_policy_attachment" "cicd-codebuild-attachment" {
  policy_arn = aws_iam_policy.cicd-build-policy.arn
  role       = aws_iam_role.codebuild-role.id
}

resource "aws_iam_role_policy_attachment" "cicd-codebuild-attachment2" {
  policy_arn = "arn:aws:iam::aws:policy/AmazonEC2ContainerRegistryPowerUser"
  role       = aws_iam_role.codebuild-role.id
}

## ECS ##

resource "aws_iam_role" "ecs_task_execution_role" {
  name = "${var.name}-ecs-task-execution-role"
  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Sid    = ""
        Principal = {
          Service = "ecs-tasks.amazonaws.com"
        }
      },
    ]
  })
}

resource aws_iam_role ecs_auto_scale_role {
  name = "${var.name}-ecs-auto-scale-execution-role"
  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Sid    = ""
        Principal = {
          Service = "ecs-tasks.amazonaws.com"
        }
      },
    ]
  })
}

resource "aws_iam_role_policy_attachment" "ecs_task_execution_role" {
  role       = aws_iam_role.ecs_task_execution_role.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy"
}

data "aws_iam_policy_document" "ecs_service_scaling" {

  statement {
    effect = "Allow"

    actions = [
      "application-autoscaling:*",
      "ecs:DescribeServices",
      "ecs:UpdateService",
      "cloudwatch:DescribeAlarms",
      "cloudwatch:PutMetricAlarm",
      "cloudwatch:DeleteAlarms",
      "cloudwatch:DescribeAlarmHistory",
      "cloudwatch:DescribeAlarms",
      "cloudwatch:DescribeAlarmsForMetric",
      "cloudwatch:GetMetricStatistics",
      "cloudwatch:ListMetrics",
      "cloudwatch:PutMetricAlarm",
      "cloudwatch:DisableAlarmActions",
      "cloudwatch:EnableAlarmActions",
      "iam:CreateServiceLinkedRole",
      "sns:CreateTopic",
      "sns:Subscribe",
      "sns:Get*",
      "sns:List*"
    ]

    resources = [
      "ecs-tasks.amazonaws.com", "codebuild.amazonaws.com", "codepipeline.amazonaws.com"
    ]
  }
}

resource aws_iam_policy ecs_service_scaling {
  name = "${var.name}-ecs-scaling"
  path = "/"
  description = "Allow ECS to scale."
  policy = data.aws_iam_policy_document.ecs_service_scaling.json
}

resource aws_iam_role_policy_attachment ecs_service_scaling{
    role = aws_iam_role.ecs_auto_scale_role.name
    policy_arn = aws_iam_policy.ecs_service_scaling.arn
}