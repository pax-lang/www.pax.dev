#!/bin/bash

aws --profile=pax s3 cp --recursive --acl=public-read . s3://www.pax.dev/ --exclude "*" --include "index.html" --include "src/website/.pax/build/release/web/*"
aws --profile=pax cloudfront create-invalidation --distribution-id=E4XEPE4OLK651 --paths "/*"
