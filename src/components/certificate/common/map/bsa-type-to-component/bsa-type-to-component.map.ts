import { BSAType } from 'common/enums/enums';
import CertificateBSA2020 from '../../../components/certificate-bsa-2020/certificate-bsa-2020';
import CertificateBSA2021 from '../../../components/certificate-bsa-2021/certificate-bsa-2021';
import CertificateWinter2020 from '../../../components/certificate-winter-2020/certificate-winter-2020';

const bsaTypeToComponent = {
  [BSAType.BSA_2020]: CertificateBSA2020,
  [BSAType.BSA_2021]: CertificateBSA2021,
  [BSAType.WINTER_2020]: CertificateWinter2020,
} as const;

export { bsaTypeToComponent };
