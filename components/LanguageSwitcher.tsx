"use client"
import { useRouter } from 'next/router'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'

const locales = [
  { code: 'en', name: 'English', flag: '/flags/us.svg' },
  { code: 'fr', name: 'Français', flag: '/flags/fr.svg' },
  { code: 'es', name: 'Español', flag: '/flags/es.svg' },
  { code: 'de', name: 'Deutsch', flag: '/flags/de.svg' }
]

export default function LanguageSwitcher() {
  const router = useRouter()
  const { t } = useTranslation('common')

  const handleChange = (e: { target: { value: any } }) => {
    const locale = e.target.value
    router.push(router.pathname, router.asPath, { locale })
  }

  return (
    <div className="text-right">
      <p className="text-sm text-white mb-2">{t('footer.select_region')}</p>
      <div className="flex items-center space-x-2">
        <select
          onChange={handleChange}
          value={router.locale}
          className="bg-gray-800 text-white border border-gray-600 rounded px-3 py-1 text-sm"
        >
          {locales.map(({ code, name }) => (
            <option key={code} value={code}>{name}</option>
          ))}
        </select>
        <Image
          src={locales.find(l => l.code === router.locale)?.flag || '/flags/us.svg'}
          alt="flag"
          width={24}
          height={16}
        />
      </div>
    </div>
  )
}
