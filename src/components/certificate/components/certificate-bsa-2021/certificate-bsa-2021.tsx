import { FC, User } from 'common/types/types';
import { View, Text, Page, PDFImage } from 'components/common/common';
import logo from 'assets/img/bsa.logo.png';
import { styles } from './styles';

type Props = {
  user: User;
};

const CertificateBSA2021: FC<Props> = ({ user }) => (
  <Page size="A4" orientation="landscape">
    <View style={styles.page}>
      <Text style={styles.title}>Binary Studio Academy 2021</Text>
      <View style={styles.logoWrapper}>
        <PDFImage src={logo} style={styles.logo} />
      </View>
      <Text style={styles.userName}>
        {user.firstName} {user.lastName}
      </Text>
    </View>
  </Page>
);
export default CertificateBSA2021;
