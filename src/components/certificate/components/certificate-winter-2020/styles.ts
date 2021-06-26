import { createPdfStyles } from 'helpers/helpers';

const styles = createPdfStyles({
  page: {
    padding: 25,
    flexGrow: 1,
  },
  title: {
    textAlign: 'center',
    marginBottom: 50,
    fontWeight: 'bold',
    fontSize: 22,
    color: '#00e1ff',
  },
  logoWrapper: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  logo: {
    marginBottom: 50,
    width: 200,
    height: 183,
  },
  userName: {
    textAlign: 'center',
  },
});

export { styles };
