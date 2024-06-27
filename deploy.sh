#!/bin/bash

aws --profile=pax s3 sync --acl=public-read . s3://www.pax.dev/ 
aws --profile=pax cloudfront create-invalidation --distribution-id=EYKZZ3KH242XU --paths "/*"