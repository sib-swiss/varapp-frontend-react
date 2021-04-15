'use strict';

var ASC = 'ASC';
var DESC = 'DESC';

var TOASTR_OPTIONS = {
    closeButton: true,
    preventDuplicates: true,
    positionClass: 'toast-top-right',
    tapToDismiss : true,
};

var DBSNP_LINK = 'http://www.ncbi.nlm.nih.gov/SNP/snp_ref.cgi?rs=';
var ENSEMBL_LINK = 'http://www.ensembl.org/id/';
var ENTREZ_LINK = 'http://www.ncbi.nlm.nih.gov/gene/';
var CLINVAR_LINK = 'http://www.ncbi.nlm.nih.gov/clinvar/';
var EXAC_LINK = 'https://gnomad.broadinstitute.org/variant/';
var EXAC_QUERY_PARAMS = '?dataset=exac';
var GNOMAD_LINK = 'https://gnomad.broadinstitute.org/variant/';
var GNOMAD_QUERY_PARAMS = '?dataset=gnomad_r2_1';
var OMIM_LINK = 'http://www.omim.org/search?sort=score+desc%2C+prefix_sort+desc&search=';

module.exports = {
    ASC,
    DESC,
    TOASTR_OPTIONS,
    DBSNP_LINK,
    ENSEMBL_LINK,
    ENTREZ_LINK,
    CLINVAR_LINK,
    EXAC_LINK,
    EXAC_QUERY_PARAMS,
    GNOMAD_LINK,
    GNOMAD_QUERY_PARAMS,
    OMIM_LINK,
};
