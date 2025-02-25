import cn from 'classnames';
import { useTranslation } from 'next-i18next';

export default function Copyright({ className }: { className?: string }) {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation('common');
  return (
    <div className={cn('tracking-[0.2px]', className)}>
      &copy; {t('text-copy-right')} {currentYear} {t('text-copy-right-by')}{' '}
      Made with ❤️ <a
        href="https://mondayui.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-brand-dark"
      >
        Mondayui.com
        
      </a>
      .
    </div>
  );
}
