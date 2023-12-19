variable "region" {
  type        = string
  description = "Region to deploy Infrastructure."
  default     = "us-east-2"
}

variable "name" {
  type        = string
  description = "Name of Company Project."
  default     = "webmasters-solutions-llc"
}

variable "port" {
  type = number
  description = "Port Exposed by Docker Image."
  default = 443
}

variable "main_cidr" {
  type = string
  description = "Value of Main CIDR block."
  default = "10.0.0.0/16"
}

variable "az_count" {
  type = number
  description = "Number of availability zones in region."
  default = 3
}

variable "image_repo_name" {
  type = string
  description = "Name of ECR repo."
  default = "webmasterssolutionsllc"
}

variable "git_repo" {
  type = string
  description = "Git Repo to watch for changes to start pipeline."
  default = "web-dev-one/webmasterssolutionsllc_admin"
}

variable "branch" {
  type = string
  description = "Version Control Git Branch to watch for changes to run pipeline."
  default = "main"
}

variable "fargate_cpu" {
  type        = string
  description = "CPU to provision for Fargate instances."
  default     = "1024"
}

variable "fargate_memory" {
  type        = string
  description = "Fargate instance memory to provision."
  default     = "2048"
}

variable "docker_tag" {
  type        = string
  description = "Image tag for docker."
  default     = "wmsllc"
}

variable "app_count" {
  type        = number
  description = "Number of Containers to run."
  default     = 1
}