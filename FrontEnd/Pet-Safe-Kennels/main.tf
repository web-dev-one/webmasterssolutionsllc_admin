terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
  required_version = "~> 1.3.2"
}

provider "aws" {
  region = var.region
  # profile = "web_dev"
  default_tags {
    tags = var.prop_tags
  }
}

## shell script setups ##

resource "null_resource" "shell" {
  provisioner "local-exec" {
    command = "/bin/bash .ecr.sh"
  }
}

# resource null_resource encrypt {
#     provisioner local-exec {
#       command = "/bin/bash .createpsk.sh"
#     }
# }