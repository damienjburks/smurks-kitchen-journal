module "website" {
  source  = "damienjburks/secure-static-site/aws"
  version = "1.1.1"

  bucket_name             = "${var.bucket_name}-${data.aws_caller_identity.current.account_id}"
  enable_domain           = true
  logging_enabled         = true
  enable_failover         = true
  enable_replication      = true
  enable_security_headers = true
  content_security_policy = true
  enable_spa_routing      = true
  create_route53_zone     = true
  primary_region          = var.primary_region
  failover_region         = var.failover_region

  domain_name = "smurkskitchen.com"

  tags = {
    Environment = "Production"
    ManagedBy   = "Terraform Cloud"
    ApplicationName = "Smurks Kitchen Journal"
    GithubUrl = "https://github.com/damienjburks/smurks-kitchen-journal"
  }
}