import { BSAType } from 'common/enums/enums';
import { EnumValues, FC } from 'common/types/types';
import { PDFViewer, Document } from 'components/common/common';
import NotFound from 'components/not-found/not-found';
import { useRouter } from 'hooks/hooks';
import { getUser } from '../../helpers/helpers';
import { RouteParams } from '../../common/types/types';
import { bsaTypeToComponent } from '../../common/map/map';
import styles from './styles.module.css';

type Props = {
  bsaType: EnumValues<typeof BSAType>;
};

const CertificateWrapper: FC<Props> = ({ bsaType }) => {
  const { params } = useRouter<RouteParams>();
  const user = getUser(bsaType, params.userId);
  const Cert = bsaTypeToComponent[bsaType];

  if (!user) {
    return <NotFound />;
  }

  return (
    <PDFViewer className={styles.viewer}>
      <Document>
        <Cert user={user} />
      </Document>
    </PDFViewer>
  );
};

export default CertificateWrapper;
