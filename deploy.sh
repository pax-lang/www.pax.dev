#!/bin/bash

aws --profile=pax s3 cp --recursive --acl=public-read . s3://www.pax.dev/
aws --profile=pax cloudfront create-invalidation --distribution-id=E4XEPE4OLK651 --paths "/*"
