provider "aws" {
  region  = "eu-central-1"
  profile = "Student-447746596892"
}


module "s3-website" {
  source      = "./modules/s3-website"
  bucket_name = "wiadereczkokochane"
}

